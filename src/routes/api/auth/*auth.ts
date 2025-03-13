import { auth } from "@lib/auth";
import { toSolidStartHandler } from "better-auth/solid-start";

/**
 * Handle any API routes:
 * GET /api/auth/*
 * POST /api/auth/*
 */
export const { GET, POST } = toSolidStartHandler(auth);
