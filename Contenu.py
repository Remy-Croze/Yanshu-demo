import os

def scanner_projet_complet(dossier_source, fichier_sortie, dossiers_a_ignorer=None):
    if dossiers_a_ignorer is None:
        dossiers_a_ignorer = []

    if not os.path.exists(dossier_source):
        print(f"Erreur : Le dossier '{dossier_source}' n'existe pas.")
        return

    try:
        with open(fichier_sortie, 'w', encoding='utf-8') as f_out:
            
            # Parcours de l'arborescence
            for root, dirs, files in os.walk(dossier_source, topdown=True):
                # 1. Filtrage des dossiers à ignorer (modification in-place de dirs)
                dirs[:] = [d for d in dirs if d not in dossiers_a_ignorer]
                
                # 2. Écriture du dossier courant
                chemin_absolu_root = os.path.abspath(root)
                f_out.write(f'"{chemin_absolu_root}":\n')

                # 3. Traitement des fichiers dans ce dossier
                for fichier in files:
                    chemin_complet = os.path.join(root, fichier)
                    chemin_absolu = os.path.abspath(chemin_complet)
                    
                    # Écriture de l'entête du fichier
                    f_out.write(f'  "{chemin_absolu}":\n')
                    f_out.write('    "contenu": """\n')
                    
                    # Tentative de lecture du contenu
                    try:
                        with open(chemin_complet, 'r', encoding='utf-8') as f_lecture:
                            contenu = f_lecture.read()
                            # On écrit le contenu tel quel
                            f_out.write(contenu)
                            # On s'assure qu'il y a un saut de ligne avant la fermeture
                            if not contenu.endswith('\n'):
                                f_out.write('\n')
                    except (UnicodeDecodeError, PermissionError):
                        # Gestion des fichiers binaires (images, icones) ou illisibles
                        f_out.write("[Fichier non textuel ou illisible]\n")
                    except Exception as e:
                        f_out.write(f"[Erreur de lecture: {e}]\n")
                    
                    # Fermeture du bloc contenu
                    f_out.write('"""\n\n')
                    
                    # Séparateur demandé
                    f_out.write("-" * 50 + "\n")

        print(f"Succès ! Export généré dans : {os.path.abspath(fichier_sortie)}")

    except Exception as e:
        print(f"Une erreur globale est survenue : {e}")

# --- CONFIGURATION ---

# Liste des dossiers techniques à ignorer (ajuste selon tes besoins)
exclusions = [
    'node_modules', 
    '.next', 
    '.git', 
    '.idea', 
    '.vscode', 
    'dist', 
    'build', 
    '__pycache__',
    'venv',
    'env'
]

# Chemin du dossier source (utilise r"" pour éviter les erreurs Windows)
dossier_cible = r"C:\Users\Rémy\OneDrive\Bureau\UTSEUS\Yanshu_Demo\Yanshu_demo\src"

# Nom du fichier de sortie
fichier_resultat = "export_contenu_complet.txt"

if __name__ == "__main__":
    scanner_projet_complet(dossier_cible, fichier_resultat, exclusions)