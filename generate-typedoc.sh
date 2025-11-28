# needs to be cloned to a one-up directory, otherwise README.md auto-discovery
# in framework's typedoc includes website's README.md, which is not desired
REPO=$(pwd)
: "${FRAMEWORK_TYPEDOC_FOLDER:=./../framework-typedoc}"
: "${FRAMEWORK_BRANCH:=develop}"
: "${WEBSITE_REFERENCE_DOCS:=./src/pages/docs/reference/}"
echo "Generating typedoc for framework branch \"$FRAMEWORK_BRANCH\" in \"$FRAMEWORK_TYPEDOC_FOLDER\"";
rm -rf $FRAMEWORK_TYPEDOC_FOLDER
git clone https://github.com/proto-kit/framework.git $FRAMEWORK_TYPEDOC_FOLDER
cd "$FRAMEWORK_TYPEDOC_FOLDER"
git checkout $FRAMEWORK_BRANCH
npm ci --force
npm run prisma:generate
npm run build
npm run typedoc
cd $REPO
rm -rf $WEBSITE_REFERENCE_DOCS
mkdir -p $WEBSITE_REFERENCE_DOCS
cp -r "$FRAMEWORK_TYPEDOC_FOLDER/docs/@proto-kit/." $WEBSITE_REFERENCE_DOCS
node generate-reference-meta.mjs
rm -rf $FRAMEWORK_TYPEDOC_FOLDER
echo "Typedoc generated successfully"