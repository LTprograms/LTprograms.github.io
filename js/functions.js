/**
 * Determines a person's age with a birth date given
 * @param {Date | string} birth birth date
 * @returns person's age
 */
function getAge(birth) {
    const today = new Date();
    const birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}