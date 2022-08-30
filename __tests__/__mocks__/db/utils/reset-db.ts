import { filenames, writeJSONToFile } from "@/lib/db/db-utils";
import { readFakeData } from "../../fakeData";

export const resetDb = async () => {
    // failsafe against resetting production db
    const safeToReset = process.env.NODE_ENV === "test"
    if (!safeToReset) {
        console.log("WARNING: database rest is unavailable outside test environment");
        return
    }

    const { fakeBands, fakeReservations, fakeShows, fakeUsers } = await readFakeData()
    //overwrite data to files
    await Promise.all([
        writeJSONToFile(filenames.bands, fakeBands), 
        writeJSONToFile(filenames.reservations, fakeReservations), 
        writeJSONToFile(filenames.shows, fakeShows), 
        writeJSONToFile(filenames.users, fakeUsers)
    ])
}