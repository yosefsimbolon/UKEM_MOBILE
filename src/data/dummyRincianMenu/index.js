import React from 'react';
import { AktivitasRincian, PrestasiRincian, ProfilRincian } from "../../assets";

export const dummyRincianMenu = [
    {
        id: 1,
        nama: 'Profil ',
        gambar: <ProfilRincian/>,
        halaman: 'ProfilRincianUkm'
    },
    {
        id: 2,
        nama: 'Aktivitas',
        gambar: <AktivitasRincian/>,
        halaman: 'AktivitasRincianUkm'
    },
    {
        id: 3,
        nama: 'Prestasi',
        gambar: <PrestasiRincian/>,
        halaman: 'PrestasiRincianUkm'
    }
]