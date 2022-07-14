/*
 * styles.ts
 */

export const baseColor = "indigo";

export const transition = "transition ease-in-out duration-200";

export const focusRing = `${transition} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${baseColor}-500`;

export const cardBorder = "border border-gray-300";
export const cardBorderEmpty = "border border-gray-300";

export const cardContainer = `bg-white shadow overflow-hidden rounded-md ${cardBorder}`;
export const cardContainerEmpty = `bg-white        overflow-hidden rounded-md ${cardBorderEmpty}`;

export const textEmpty = "text-xl font-medium text-gray-300";

export const input = `focus:ring-${baseColor}-500 focus:border-${baseColor}-500 shadow-sm sm:text-sm border-gray-300 rounded-md`;

export const button = `inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-${baseColor}-600 hover:bg-${baseColor}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${baseColor}-500`;
