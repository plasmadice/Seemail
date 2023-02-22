export default async function CodePage() {
  async function getCode() {
    console.log(
      `process.env.NODE_ENV.includes("dev"): ${process.env.NODE_ENV.includes(
        "dev"
      )}`
    );
    const url = `${
      process.env.NODE_ENV.includes("dev")
        ? process.env.BASE_URL
        : process.env.VERCEL_URL
    }/api/getEmailContents`;
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    return data?.code;
  }

  const code = await getCode();
  return (
    <div>
      <h1>{code}</h1>
    </div>
  );
}
