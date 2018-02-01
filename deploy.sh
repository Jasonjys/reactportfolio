REMOTE=$(git config --get remote.host.url)
npm run build
cd build;
git init;
git remote add origin $REMOTE;
git checkout master;
git add -A .;
git commit -m 'publish';
git push origin master -f;
cd ..;
rm -rf build

echo 'Published!'