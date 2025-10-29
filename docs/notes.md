# Projects plan
🔮 Your Path Forward
    ✅ Inka-CE: Pure HTML/JS/CSS, responsive, modular, hosted on Vercel
    🔄 Inka-ComfyUI Extension (optional): Python wrapper + iframe + API bridge
    🚀 Inka (Full Edition): Next.js + Neon + Blob + hosted AI + cloud sync
# Development plan
## Fonts
[Google Fonts](https://fonts.google.com/icons?icon.size=24&icon.color=%235f6368&icon.query=Loading&icon.set=Material+Icons&icon.style=Filled)

## Gradio Python env
### Final resolve:
ls -l /usr/local/bin/python3
brew link python@3.12 --force
alias python312="/usr/local/opt/python@3.12/bin/python3.12"
alias python313="/usr/local/opt/python@3.13/bin/python3.13"

python312 -m venv venv
source venv/bin/activate
pip3 install --upgrade pip setuptools wheel
pip3 install torch --index-url https://download.pytorch.org/whl/cpu
pip3 install -r requirements.txt --no-deps
deactivate


### Run server
python312 app.py
python3 app.py
Running on http://127.0.0.1:7860


http://localhost:7860  ← for Gradio
http://localhost:5000  ← for Flask
http://localhost:8000  ← for FastAPI

Python: Restart Language Server

rsync -av --exclude 'venv/' --exclude '.git/' /Volumes/CMPRO128GB/AGI_projects/maiChuong_github/inka-ce/ /Volumes/CMPRO128GB/AGI_projects/maiChuong_github/inka/
