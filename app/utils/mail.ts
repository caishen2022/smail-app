import randomName from "@scaleway/random-name";
import { customAlphabet } from "nanoid";

export const MAIL_DOMAIN = "caishenjia.ccwu.cc";
const nanoSuffix = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 6);
const generatedAddressPattern = new RegExp(
	`^[a-z0-9-]+-[a-z0-9]{6}@${MAIL_DOMAIN.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`,
);

export function generateEmailAddress() {
	return `${randomName()}-${nanoSuffix()}@${MAIL_DOMAIN}`;
}

export function normalizeEmailAddress(value: string) {
	return value.trim().toLowerCase();
}

export function isReusableGeneratedAddress(value: string) {
	return generatedAddressPattern.test(normalizeEmailAddress(value));
}
