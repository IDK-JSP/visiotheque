import React, {useState, useEffect} from 'react';
import {get, post, put, remove} from '../api/api';  // Assurez-vous d'importer les méthodes ici
import {Button, TextField, Grid, Typography, DialogContent, DialogActions, Dialog, DialogTitle} from '@mui/material';

const CategoryCRUD: React.FC = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [formData, setFormData] = useState({id: null, name: '', description: ''});
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<'create' | 'update'>('create');

    // Récupérer les catégories
    const fetchCategories = async () => {
        try {
            const data = await get('/categories');
            setCategories(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des catégories", error);
        }
    };

    // Ouvrir le formulaire pour la création ou la mise à jour
    const openForm = (category: any = null, action: 'create' | 'update') => {
        setFormData(category ? {id: category.id, name: category.name, description: category.description} : {
            id: null,
            name: '',
            description: ''
        });
        setAction(action);
        setOpen(true);
    };

    // Soumettre le formulaire (création ou mise à jour)
    const handleSubmit = async () => {
        try {
            if (action === 'create') {
                await post('/categories', formData);
            } else if (action === 'update') {
                await put(`/categories/${formData.id}`, formData);
            }
            fetchCategories();
            setOpen(false);
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire", error);
        }
    };

    // Supprimer une catégorie
    const handleDelete = async (id: number) => {
        try {
            await remove(`/categories/${id}`);
            fetchCategories();
        } catch (error) {
            console.error("Erreur lors de la suppression de la catégorie", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    return (
        <div>
            <Typography variant="h4">Gestion des catégories</Typography>
            <Button variant="contained" color="primary" onClick={() => openForm(null, 'create')}>Ajouter une
                catégorie</Button>

            <Grid container spacing={2} mt={2}>
                {categories.map((cat) => (
                    <Grid item xs={12} sm={6} md={4} key={cat.id}>
                        <div>
                            <Typography variant="h6">{cat.name}</Typography>
                            <Typography variant="body2">{cat.description}</Typography>
                            <Button onClick={() => openForm(cat, 'update')}>Modifier</Button>
                            <Button onClick={() => handleDelete(cat.id)}>Supprimer</Button>
                        </div>
                    </Grid>
                ))}
            </Grid>

            {/* Formulaire de création / mise à jour */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>{action === 'create' ? 'Ajouter' : 'Modifier'} une catégorie</DialogTitle>
                <DialogContent>
                    <TextField label="Nom" fullWidth name="name" value={formData.name} onChange={handleChange}
                               margin="normal"/>
                    <TextField label="Description" fullWidth name="description" value={formData.description}
                               onChange={handleChange} margin="normal"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">Annuler</Button>
                    <Button onClick={handleSubmit}
                            color="primary">{action === 'create' ? 'Créer' : 'Mettre à jour'}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CategoryCRUD;
