import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AppSafeView from "@/components/utils/AppSafeView";
import { ThemedView } from "@/components/ThemedView";
import { BenefitsStyle } from "@/components/styles/BenefitsStyle";
import { ThemedText } from "@/components/ThemedText";
import Value from "@/components/androidHealth/Value";
import { AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import AppButton from "@/components/utils/AppButton";
import { COLORS } from "@/constants/AppColors";
import { resFontSize, screenHeight } from "@/constants/Sizes";

// import RingProgress from "@/components/androidHealth/RingProgress";
// import useHealthData from "@/hooks/useHealthData";

const STEPS_GOAL = 10_000;

const index = () => {
  const [date, setDate] = useState(new Date());
  const router = useRouter();

  const changeDate = (numDays) => {
    const currentDate = new Date(date); // Create a copy of the current date
    // Update the date by adding/subtracting the number of days
    currentDate.setDate(currentDate.getDate() + numDays);

    setDate(currentDate); // Update the state variable
  };

  return (
    <AppSafeView>
        <Image
          imageStyle={BenefitsStyle.imageStyle}
          style={BenefitsStyle.imageContainer}
          source={require("../assets/appImages/Benefit1.png")}
        />
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
              backgroundColor: COLORS.primary2,
              height: 8,
              width: 40,
              borderRadius: 10,
            }}
          ></ThemedView>
          <ThemedView
            style={{
              backgroundColor: COLORS.primary2,
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
            Tailored Plans for Your Unique Needs
          </ThemedText>
          <ThemedText
            type="h5mid"
            lightColor={COLORS.text}
            style={{ letterSpacing: 0.5, lineHeight: 25 }}
          >
            Experience customised exercise routines and treatments designed
            specifically for your condition, ensuring effective and targeted
            pain relief.
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
              onPress={() => router.push("/Commit")}
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

      {/* <ThemedView>
        <AntDesign
          onPress={() => changeDate(-1)}
          name="left"
          size={20}
          color="#C3FF53"
        />
        <ThemedText>{date.toDateString()}</ThemedText>

        <AntDesign
          onPress={() => changeDate(1)}
          name="right"
          size={20}
          color="#C3FF53"
        />
      </ThemedView>
      <Link href={"/stepCounter"}> Go to step counter</Link> */}
      {/* <Link href={"/stepCounter"}> Go to step counter</Link>
      <Link href={"/chatList"}> Go to Chat List</Link>

      <AppButton
        btnStyle={{ backgroundColor: COLORS.primary }}
        title={"Go to treatment"}
        onPress={() => router.push("/treatment/exerciseScreen")}
      />
      <ThemedView
        style={{
          flexDirection: "row",
          gap: 25,
          flexWrap: "wrap",
          padding: 15,
        }}
      >
        <Value label="Steps" value="1219" />
        <Value label="Distance" value="0,75 km" />
        <Value label="Flights Climbed" value="12" />
      </ThemedView> */}
    </AppSafeView>
  );
};

export default index;
