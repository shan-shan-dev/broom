#!/bin/bash

readonly ARTIFACT_DIRECTORY="$1"
readonly TEMPORARY_DIRECTORY=".temp"
readonly COMPRESSED_DIRECTORY="compressed"
readonly COMPRESSED_FILE="$COMPRESSED_DIRECTORY.tar.gz"

cd "$ARTIFACT_DIRECTORY" || exit 1
echo "- Changed current working directory to: $ARTIFACT_DIRECTORY"

mkdir --parents "../$TEMPORARY_DIRECTORY"
echo "- Created a temporary directory at: ../$TEMPORARY_DIRECTORY"

mv ./* "../$TEMPORARY_DIRECTORY"
echo "- Moved all of the content from: $ARTIFACT_DIRECTORY ..."
echo "... to a temporary directory at: $TEMPORARY_DIRECTORY"

cd "../$TEMPORARY_DIRECTORY" || exit 1
echo "- Changed current working directory to temporary one: $TEMPORARY_DIRECTORY"

echo "- Compressing the content of current working directory to: $COMPRESSED_FILE ..."
tar --create --verbose --gzip --preserve-permissions --file "$COMPRESSED_FILE" ./*
echo "... Compression finished."

mv "$COMPRESSED_FILE" "../$COMPRESSED_FILE"
echo "- Moved $COMPRESSED_FILE to parent directory: ../$COMPRESSED_FILE"

cd ..
echo "- Changed the current working directory to parent one: ../"

echo "- Decompressing the file: $COMPRESSED_FILE ..."
tar --extract --gzip --preserve-permissions --file "$COMPRESSED_FILE"
echo "... Decompression finished.: $COMPRESSED_FILE"

rm -rf "$TEMPORARY_DIRECTORY"
echo "- Removed the temporary directory: $TEMPORARY_DIRECTORY"

rm -f "$COMPRESSED_FILE"
echo "- Removed the compressed file: $COMPRESSED_FILE"
