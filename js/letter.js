const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
แฮปปี้ๆ วันครบรอบ 1.2 ปีนะน้ำพุ 
ขอโทษที่เอาแต่ใจทุกวัน 
ต่อไปนี้จะน้อยๆหน่อย ิิ 
ขอบคุณที่ทนกันมาได้นะะ 
แกแม่งโคตรจาเท่ เฟี้ยวๆเลย 
เรารักแกที่สุดในโลกเลยที่ร้ากกก >< 
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
