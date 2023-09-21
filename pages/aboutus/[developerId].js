import { useRouter } from "next/router";

function DeveloperId() {
  const router = useRouter();
  const devId = router.query.developerId;

  // developerData.js
  const developerDetails = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];


  // Find the developer with the given ID
  const dev = developerDetails.find((developer) => developer.id === parseInt(devId));

  return (
    <div>
      {dev ? (
        <div>
          <h1>{dev.name}</h1>
          <p>{dev.role}</p>
        </div>
      ) : (
        <h1>Developer doesn't exist</h1>
      )}
    </div>
  );
}

export default DeveloperId;
