import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


export const useAuthStore = defineStore(
    "auth",
    {
        state: () => {
            const auth = getAuth();
            const db = getFirestore();
            return { auth, db, token: null }
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
                    ).then(
                        () => {
                            alert("Registrado correctamente");
                        }
                    ).catch(
                        (error) => {
                            alert(error.message);
                        }
                    )
            }
        }
    }
)