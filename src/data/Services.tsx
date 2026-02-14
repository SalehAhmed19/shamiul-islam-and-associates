import { icons } from "../assets/assets";
import type { ServiceInterface } from "../Interfaces/ServiceInterface";

export const servicesData: ServiceInterface[] = [
  {
    icon: icons.civil,
    title: "service_civil_title",
    description: "service_civil_desc",
  },
  {
    icon: icons.criminal,
    title: "service_criminal_title",
    description: "service_criminal_desc",
  },
  {
    icon: icons.family,
    title: "service_family_title",
    description: "service_family_desc",
  },
  {
    icon: icons.banking,
    title: "service_banking_title",
    description: "service_banking_desc",
  },
  {
    icon: icons.corporate,
    title: "service_corporate_title",
    description: "service_corporate_desc",
  },
  {
    icon: icons.cyber,
    title: "service_cyber_title",
    description: "service_cyber_desc",
  },
];
