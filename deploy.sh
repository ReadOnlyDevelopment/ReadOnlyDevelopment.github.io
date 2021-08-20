# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

# add .nojekyll to bypass GitHub Page's default behavior
touch .nojekyll

# if you are deploying to a custom domain
echo 'github.readonlydev.com' > CNAME

git add -A
git commit -m 'deploy'
git push

cd -