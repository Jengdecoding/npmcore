import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 1. API ดึงข้อมูลบัญชี
app.get('/api/account', (req, res) => {
    const data = {
        status: "success",
        accountName: "2zong2",
        protocol: "VLESS",
        expireDays: 999,
        usedGB: 21.39
    };
    res.json(data);
});

// 2. API รับคำสั่ง
app.post('/api/action', (req, res) => {
    const userAction = req.body.action; 
    console.log("ได้รับคำสั่งจากหน้าเว็บ:", userAction);

    res.json({
        status: "success",
        message: `ทำคำสั่ง ${userAction} สำเร็จแล้ว!`
    });
});

app.listen(PORT, () => {
    console.log(`🚀 API Server รันอยู่บน http://localhost:${PORT}`);
});
