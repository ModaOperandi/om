import React from "react";

import { Text } from "./Text";
import { Stack } from "../Stack";

export default { title: "Components|Text" };

export const Default = () => (
  <Stack space={8}>
    <Text font="sans">{`font={"sans"}`} === Moda Operandi Sans (default)</Text>

    <Text font="serif">{`font={"serif"}`} === Moda Operandi Serif</Text>

    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
      inventore ab illo doloremque assumenda magni praesentium sunt repellat
      quasi, ipsam ullam ipsa earum eligendi aspernatur consequatur repudiandae
      quaerat asperiores eos! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Voluptatibus, inventore ab illo doloremque assumenda magni
      praesentium sunt repellat quasi, ipsam ullam ipsa earum eligendi
      aspernatur consequatur repudiandae quaerat asperiores eos! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore ab
      illo doloremque assumenda magni praesentium sunt repellat quasi, ipsam
      ullam ipsa earum eligendi aspernatur consequatur repudiandae quaerat
      asperiores eos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptatibus, inventore ab illo doloremque assumenda magni praesentium
      sunt repellat quasi, ipsam ullam ipsa earum eligendi aspernatur
      consequatur repudiandae quaerat asperiores eos! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Voluptatibus, inventore ab illo doloremque
      assumenda magni praesentium sunt repellat quasi, ipsam ullam ipsa earum
      eligendi aspernatur consequatur repudiandae quaerat asperiores eos! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, inventore
      ab illo doloremque assumenda magni praesentium sunt repellat quasi, ipsam
      ullam ipsa earum eligendi aspernatur consequatur repudiandae quaerat
      asperiores eos!
    </Text>
  </Stack>
);
