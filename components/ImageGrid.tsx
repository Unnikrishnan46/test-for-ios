import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Image,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  images: any;
};

const ImageGrid = ({ images }: Props) => {
  const width = Dimensions.get("window").width;
  const [imageUris, setImageUris] = useState<{ [key: string]: string }>({});

  async function getImageUri(id: string) {
    const asset = await MediaLibrary.getAssetInfoAsync(id);
    return asset.localUri || asset.uri;
  }

  useEffect(() => {
    async function fetchImageUris() {
      const uris = await Promise.all(
        images.map(async (image: any) => {
          const uri = Platform.OS === "ios" ? await getImageUri(image.id) : image.uri;
          return { id: image.id, uri };
        })
      );

      const urisMap: { [key: string]: string } = {};
      uris.forEach(({ id, uri }) => {
        urisMap[id] = uri;
      });
      setImageUris(urisMap);
    }

    fetchImageUris();
  }, [images]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 6 }}>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          numColumns={4}
          columnWrapperStyle={{gap:3,marginBottom:3}}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.imageContainer,
                { width: width / 4 - 12, height: width / 4 - 12 },
              ]}
            >
              <Image
                source={{
                  uri:imageUris[item.id]
                }}
                style={styles.image}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imageContainer: {
    // height:
    backgroundColor: "#E5E4E2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: "95%",
  },
});
