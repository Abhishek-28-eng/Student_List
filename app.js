const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;


app.get("/Student", async (req, res) => {
  try {
    
    const Student = await prisma.Student.findMany({
      select: { Name: true },
    });
    res.json(Student);
  } catch (error) {
    console.error("Error fetching Student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

            
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
