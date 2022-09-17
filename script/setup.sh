# install frontend dep
cd ./frontend
npm i -D

# install backend dep
cd ../backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements
