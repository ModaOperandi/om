import React from "react";

import { TopNav } from "./TopNav";
import { Subsection } from "../NavBar";

export default { title: "Molecules|TopNav" };

const TRUNKSHOW_SUBSECTIONS: Subsection[] = [
  {
    type: "default",
    label: "Designers",
    links: [
      { label: "All Trunkshows", href: "#all-trunkshows" },
      { label: "Men's Jewelry", href: "#mens-jewelry" },
      { label: "Luis Morais", href: "#luis-morais" },
      { label: "AYTM", href: "#aytm" },
      { label: "Dimore Studio", href: "#dimore-studio" },
      { label: "Saved NY", href: "#saved-ny" },
      { label: "Helle Mardahl", href: "#helle-mardahl" },
      { label: "What is Trunkshow?", href: "#what-is-trunkshow?" }
    ]
  },
  {
    type: "highlighted",
    label: "The Edit",
    links: [
      {
        label: "Men's Jewelry",
        href: "#mens-jewelry",
        src:
          "https://assets12.modaoperandi.com/uploads/site_display/modules/images/bcb46e38-bfeb-47b7-93b4-064d6d542eff.jpeg"
      }
    ]
  },
  {
    type: "highlighted",
    label: "Spotlight On",
    links: [
      {
        label: "Luis Morais",
        href: "#luis-morais",
        src:
          "https://assets10.modaoperandi.com/uploads/site_display/modules/images/f0fea9d6-e551-4a5b-9e78-17e1c8f07664.jpeg"
      }
    ]
  },
  {
    type: "highlighted",
    label: "For The Home",
    links: [
      {
        label: "Saved NY x Fee Greening",
        href: "#saved-ny-x-fee-greening",
        src:
          "https://assets13.modaoperandi.com/uploads/site_display/modules/images/550531dc-d1c3-4362-b956-8a41883b7f10.jpeg"
      },
      {
        label: "AYTM",
        href: "#aytm",
        src:
          "https://assets12.modaoperandi.com/uploads/site_display/modules/images/496e9ec7-d638-449a-ae02-b26bbf10ec5e.jpeg"
      },
      {
        label: "Dimore Studio",
        href: "#dimore-studio",
        src:
          "https://assets10.modaoperandi.com/uploads/site_display/modules/images/9d280085-d3e7-4d50-b4fe-939f1baff2ea.jpeg"
      }
    ]
  }
];

const NEW_SUBSECTIONS: Subsection[] = [
  {
    type: "default",
    label: "New This Week",
    links: [
      { label: "All New This Week", href: "#all-new-this-week" },
      { label: "Clothing", href: "#clothing" },
      { label: "Shoes", href: "#shoes" },
      { label: "Bags", href: "#bags" },
      { label: "Accessories", href: "#accessories" },
      { label: "Home", href: "#home" }
    ]
  },
  {
    type: "default",
    label: "The Edit",
    links: [
      { label: "The Mix: 03", href: "#the-mix:-03" },
      { label: "The Q&A: SEASE", href: "#the-qa-sease" },
      {
        label: "Accessories of the Season",
        href: "#accessories-of-the-season"
      },
      { label: "The Collections", href: "#the-collections" },
      { label: "The Q&A: Nicholas Daley", href: "#the-qa-nicholas-daley" },
      { label: "The Mix: 02", href: "#the-mix-02" },
      { label: "New Perspectives", href: "#new-perspectives" },
      { label: "The Mix: 01", href: "#the-mix-01" },
      { label: "Peskowitz Selects", href: "#peskowitz-selects" },
      { label: "Always On: NY Art", href: "#always-on-ny-art" }
    ]
  },
  {
    type: "highlighted",
    label: "Peskowitz Selects",
    links: [
      {
        label: "Brands to Know",
        href: "#brands-to-know",
        src:
          "https://assets13.modaoperandi.com/uploads/site_display/modules/images/d4accbbc-88bd-41aa-9020-cc9bf4f31147.jpeg"
      }
    ]
  },
  {
    type: "highlighted",
    label: "The Edit",
    links: [
      {
        label: "Mix: 03",
        href: "#mix-03",
        src:
          "https://assets12.modaoperandi.com/uploads/site_display/modules/images/379c7fc1-8a61-4741-a9b8-82126d8a0537.jpeg"
      },
      {
        label: "Accessories of the Season",
        href: "#accessories-of-the-season",
        src:
          "https://assets12.modaoperandi.com/uploads/site_display/modules/images/6ee208fb-2945-4998-a859-d342b73445da.jpeg"
      },
      {
        label: "The Collections",
        href: "#the-collections",
        src:
          "https://assets13.modaoperandi.com/uploads/site_display/modules/images/811f3fac-7bc3-4fb0-b2be-2b2af9c49d15.jpeg"
      }
    ]
  }
];

const SECTIONS = [
  {
    label: "Trunkshows",
    href: "#trunkshows",
    subsections: TRUNKSHOW_SUBSECTIONS
  },
  { label: "New", href: "#new", subsections: NEW_SUBSECTIONS },
  { label: "Designers", href: "#designers" },
  { label: "Clothing", href: "#clothing" },
  { label: "Shoes", href: "#shoes" },
  { label: "Bags", href: "#bags" },
  { label: "Accessories", href: "#accessories" },
  { label: "Home", href: "#home" }
];

export const Default = () => <TopNav sections={SECTIONS} />;
