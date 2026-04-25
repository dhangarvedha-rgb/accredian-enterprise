import { NextRequest, NextResponse } from "next/server";

// In-memory store (resets on redeploy — for production use a real DB)
const leads: unknown[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const { name, email, company } = body;
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, company" },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const lead = {
      id: `lead_${Date.now()}`,
      ...body,
      createdAt: new Date().toISOString(),
      source: "enterprise_landing_page",
    };

    leads.push(lead);

    console.log("New lead captured:", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple admin view (protect this in production!)
  return NextResponse.json({
    total: leads.length,
    leads: leads.map((l: unknown) => {
      const lead = l as Record<string, unknown>;
      return { id: lead.id, name: lead.name, email: lead.email, company: lead.company, createdAt: lead.createdAt };
    }),
  });
}
