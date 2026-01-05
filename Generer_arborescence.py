import os

def generer_arborescence_avec_contenu(dossier_source, fichier_sortie, dossiers_a_ignorer=None):
    """
    Génère un fichier texte avec l'arborescence.
    Exclut les dossiers listés dans 'dossiers_a_ignorer'.
    Pour les fichiers .py, ajoute leur contenu.
    """
    
    # Si aucune liste n'est fournie, on peut mettre une liste vide ou des défauts
    if dossiers_a_ignorer is None:
        dossiers_a_ignorer = []

    if not os.path.exists(dossier_source):
        print(f"Erreur : Le dossier '{dossier_source}' n'existe pas.")
        return

    try:
        with open(fichier_sortie, 'w', encoding='utf-8') as f_out:
            f_out.write(f"ARBORESCENCE DU DOSSIER : {dossier_source}\n")
            f_out.write(f"Dossiers ignorés : {', '.join(dossiers_a_ignorer)}\n")
            f_out.write("="*50 + "\n\n")

            # topdown=True est CRUCIAL ici pour pouvoir modifier 'dirs' pendant le parcours
            for root, dirs, files in os.walk(dossier_source, topdown=True):
                
                # --- FILTRAGE DES DOSSIERS ---
                # On modifie la liste 'dirs' directement pour empêcher os.walk d'y entrer
                dirs[:] = [d for d in dirs if d not in dossiers_a_ignorer]
                
                # Calcul de la profondeur pour l'indentation
                niveau = root.replace(dossier_source, '').count(os.sep)
                indentation = '    ' * niveau
                
                # Nom du dossier courant
                nom_dossier = os.path.basename(root)
                if nom_dossier:
                    f_out.write(f"{indentation}[{nom_dossier}/]\n")
                
                sub_indentation = '    ' * (niveau + 1)

                for fichier in files:
                    chemin_complet = os.path.join(root, fichier)
                    chemin_relatif = os.path.relpath(chemin_complet, dossier_source)
                    
                    if fichier.endswith(".py"):
                        f_out.write(f"{sub_indentation}--- DÉBUT FICHIER PYTHON ---\n")
                        f_out.write(f'{sub_indentation}"{chemin_relatif}" :\n')
                        
                        try:
                            with open(chemin_complet, 'r', encoding='utf-8') as f_py:
                                contenu = f_py.read()
                                contenu_indente = "\n".join([f"{sub_indentation}| {line}" for line in contenu.splitlines()])
                                f_out.write(contenu_indente + "\n")
                        except Exception as e:
                            f_out.write(f"{sub_indentation}Erreur de lecture : {e}\n")
                            
                        f_out.write(f"{sub_indentation}--- FIN FICHIER PYTHON ---\n")
                    
                    else:
                        f_out.write(f"{sub_indentation}{fichier}\n")

        print(f"Succès ! Rapport généré : {fichier_sortie}")

    except Exception as e:
        print(f"Une erreur est survenue : {e}")

# --- Configuration ---

# Liste des dossiers que tu veux sauter
exclusions = ['.git', '__pycache__', 'Lib']

# Utilise r"" devant le chemin pour éviter l'erreur unicode sous Windows
dossier_a_scanner = r"C:\Users\Rémy\Downloads\RenduFinale\RenduFinale"
nom_fichier_resultat = "arborescence_projet.txt"

if __name__ == "__main__":
    generer_arborescence_avec_contenu(dossier_a_scanner, nom_fichier_resultat, exclusions)