import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

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
            }
        }
    }
)