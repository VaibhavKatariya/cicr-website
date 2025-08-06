import { TeamCard } from "./TeamCard";

async function getTeamData() {
  const res = await import("../data/team.json");
  return res.default;
}

export default async function TeamSection() {
  const teamMembers = await getTeamData();

  return (
    <section className="py-6 md:m-40 md:mt-0" id="team">
      <div className="container mx-auto">
        <h2 className="text-orange-600 text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
