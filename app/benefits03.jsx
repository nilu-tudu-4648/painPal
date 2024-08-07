import { View, Text, Image } from "react-native";
import React from "react";
import AppSafeView from "@/components/utils/AppSafeView";
import { BenefitsStyle } from "@/components/styles/BenefitsStyle";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { COLORS } from "@/constants/AppColors";
import { resFontSize, screenHeight } from "@/constants/Sizes";
import AppButton from "@/components/utils/AppButton";
import { useRouter } from "expo-router";

const Benefits03 = () => {
  const router = useRouter();
  return (
    <AppSafeView>
      <ThemedView>
        <Image
          imageStyle={BenefitsStyle.imageStyle}
          style={BenefitsStyle.imageContainer}
          source={require("../assets/appImages/Benefit3.png")}
        />
      </ThemedView>
      <ThemedView
        style={{
          flexDirection: "column",
          gap: 20,
          backgroundColor: COLORS.subBackground,
          flex: 1,
          height: screenHeight("45%"),
        }}
      >
        <ThemedView
          style={{
            backgroundColor: COLORS.subBackground,
            gap: 10,
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingTop: 20,
          }}
        >
          <ThemedView
            style={{
              backgroundColor: COLORS.primary,
              height: 8,
              width: 40,
              borderRadius: 10,
            }}
          ></ThemedView>
          <ThemedView
            style={{
              backgroundColor: COLORS.primary,
              height: 8,
              width: 40,
              borderRadius: 10,
            }}
          ></ThemedView>
          <ThemedView
            style={{
              backgroundColor: COLORS.primary,
              height: 8,
              width: 40,
              borderRadius: 10,
            }}
          ></ThemedView>
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "column",
            gap: 8,
            backgroundColor: COLORS.subBackground,
            paddingHorizontal: 15,
          }}
        >
          <ThemedText
            type="h1"
            lightColor={COLORS.title}
            style={{ letterSpacing: 1, fontWeight: "600" }}
          >
            Get Professional Guidance Anytime, Anywhere
          </ThemedText>
          <ThemedText
            type="h5mid"
            lightColor={COLORS.text}
            style={{ letterSpacing: 0.5, lineHeight: 25 }}
          >
            Access expert physiotherapy advice, tips, and support at your
            fingertips, making it easy to stay on top of your health wherever
            you are.
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ backgroundColor: COLORS.subBackground }}>
          <ThemedView
            style={{
              backgroundColor: COLORS.gray2,
              width: "100%",
              height: 1,
            }}
          />
          <ThemedView
            style={{
              padding: 15,
              backgroundColor: COLORS.subBackground,
              gap: 5,
            }}
          >
            <AppButton
              title={"Next"}
              btnStyle={{
                backgroundColor: COLORS.primary,
                width: "100%",
                borderRadius: 10,
              }}
              textStyle={{
                fontSize: resFontSize(1.7),
                fontWeight: "500",
              }}
              onPress={() => router.push("/(tabs)")}
            />
            <AppButton
              title={"I already have an account"}
              btnStyle={{
                backgroundColor: COLORS.subBackground,
                width: "100%",
                borderRadius: 10,
              }}
              textStyle={{
                color: COLORS.black1,
                fontSize: resFontSize(1.7),
                fontWeight: "500",
              }}
            />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </AppSafeView>
  );
};

export default Benefits03;
