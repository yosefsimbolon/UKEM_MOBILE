import React from 'react';
import { UbahProfil, UbahPassword, Keluar } from "../../assets";

export const dummyMenu = [
    {
        id: 1,
        nama: 'Ubah Profil',
        gambar: <UbahProfil/>,
        halaman: 'EditProfil'
    },

    {
        id: 2,
        nama: 'Ubah Password',
        gambar: <UbahPassword/>,
        halaman: 'UbahPassword'
    },

    {
        id: 3,
        nama: 'Keluar',
        gambar: <Keluar/>,
        halaman: 'Masuk'
    },
]