const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/player_api.php', (req, res) => {
    const { action } = req.query;

    // ==========================================
    // 📁 1. CATEGORÍAS
    // ==========================================
    if (action === 'get_vod_categories') {
        return res.json([
            { category_id: "1", category_name: "Películas de Prueba", parent_id: 0 }
        ]);
    }

    // ==========================================
    // 🎬 2. PELÍCULAS (LISTA DIRECTA)
    // ==========================================
    if (action === 'get_vod_streams') {
        console.log("¡Enviando lista de prueba a Android!");
        return res.json([
            {
                stream_id: 101, 
                name: "28 Years Later (2026)",
                stream_icon: "", // Lo dejaremos vacío por ahora
                container_extension: "mkv",
                // ⭐️ AQUÍ ESTÁ EL ENLACE EXACTO QUE ENCONTRASTE ⭐️
                direct_url: "https://a.111477.xyz/movies/28%20Years%20Later%20-%20The%20Bone%20Temple%20%282026%29/28.Years.Later.The.Bone.Temple.2026.1080p.AMZN.WEB-DL.DDP5.1.H.264-KyoGo.mkv",
                category_id: "1"
            },
        ]);
    }

    res.json([]);
});

app.listen(PORT, () => {
    console.log(`API Proxy corriendo perfecto en el puerto ${PORT}`);
});