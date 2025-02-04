# needs to be cloned to a one-up directory, otherwise README.md auto-discovery
# in framework's typedoc includes website's README.md, which is not desired
git clone https://github.com/proto-kit/framework.git ./../framework-typedoc
cd ./../framework-typedoc
# git checkout develop
git checkout develop
npm ci --force
npm run prisma:generate
npm run build
npm run typedoc
cd ./../website
rm -rf *./src/pages/docs/reference
cp -r ./../framework-typedoc/docs/@proto-kit/ ./src/pages/docs/reference
node generate-reference-meta.mjs
rm -rf ./../framework-typedoc
echo "Typedoc generated successfully"