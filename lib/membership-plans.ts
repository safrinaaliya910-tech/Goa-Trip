export type MembershipPlanKey = "gold" | "platinum" | "diamond";

export type MembershipPlan = {
  key: MembershipPlanKey;
  name: string;
  price: number;
  displayPrice: string;
  tagline: string;
  benefits: string[];
};

export const membershipPlans: Record<MembershipPlanKey, MembershipPlan> = {
  gold: {
    key: "gold",
    name: "Gold",
    price: 10000,
    displayPrice: "10,000",
    tagline: "Smart value for premium Goa experiences.",
    benefits: [
      "Up to 60% discounts at participating venues",
      "Priority reservations",
      "Special seasonal offers",
      "Digital membership card",
      "Lifetime membership",
    ],
  },
  platinum: {
    key: "platinum",
    name: "Platinum",
    price: 15000,
    displayPrice: "15,000",
    tagline: "Our most popular plan for bigger savings and better privileges.",
    benefits: [
      "Up to 70% discounts at participating venues",
      "Premium booking support",
      "Special curated experience access",
      "Digital membership card",
      "Lifetime membership",
    ],
  },
  diamond: {
    key: "diamond",
    name: "Diamond",
    price: 25000,
    displayPrice: "25,000",
    tagline: "Elite access for the best Goa benefits and luxury privileges.",
    benefits: [
      "Up to 80% discounts at participating venues",
      "Priority concierge-style support",
      "Premium stay and dining privileges",
      "Digital membership card",
      "Lifetime membership",
    ],
  },
};