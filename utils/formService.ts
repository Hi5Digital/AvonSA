export interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export async function submitForm(data: FormData) {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xyzxyz";

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error };
  }
}
