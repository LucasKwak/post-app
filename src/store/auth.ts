import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import IUser from '@/interfaces/IUser';

export const useAuthStore = defineStore(
    "auth",
    {
        state: () => {
            const auth = getAuth();
            const db = getFirestore();
            const isAuthenticated = false;

            return { auth, db, isAuthenticated }
        },
        getters: {

        },
        actions: {
            register(name:string, lastName:string, email:string, password:string) {
                // Llamada para crear un usuario en firebase
                createUserWithEmailAndPassword(this.auth, email, password)
                    .then(
                        (userCredential) => {
                            return setDoc(
                                doc(this.db, "users", userCredential.user.uid),
                                {
                                    name: name,
                                    lastName: lastName
                                }
                            )
                        }
                    )
                    .then(
                        () => {
                            alert("Registrado correctamente");
                        }
                    )
                    .catch(
                        (error) => {
                            alert(error.message);
                        }
                    )
            },
            login(email:string, password:string) {
                signInWithEmailAndPassword(this.auth, email, password)
                    .then(
                        // POR AHORA NO EJECUTAMOS NADA
                        /*
                        (userCredential) => {
                            //const user = userCredential.user;
                            // COMO ES UNA Promise<string> HAY QUE VOLVER A HACER OTRO then
                            //return user.getIdToken();
                            alert("Usuario autenticado 1")
                        }*/
                    )
                    .catch(
                        (error) => {
                            alert("Error: " + error.message);
                        }
                    )
            },
            changeAuthState(value:boolean){
                this.isAuthenticated = value;
            },
            async getAccountInfo():Promise<IUser> {
                // Este metodo no se puede ejecutar si el usuario no esta autenticado, por tanto currentUser nunca va a ser null
                const currentUser = this.auth.currentUser;
                let user:IUser = {};

                if(currentUser != null) {
                    // Recuperamos de la Promise, el docSnapshot
                    try {
                        const docSnapshot = await getDoc(doc(this.db, "users", currentUser.uid));
                        user = {
                            uid: currentUser.uid,
                            email: currentUser.email!,
                            name: docSnapshot.data()?.name,
                            lastName: docSnapshot.data()?.lastName
                        }
                        return user;
                    } catch (error) {
                        alert("Desde el getAccountInfo " + error);
                        return user;
                    }
                }else{
                    return user;
                }
            }
        }
    }
)