import { VotersService } from "./voters.service";
import { ISession } from "../shared/event.model";
import { of, Observable } from "rxjs";

describe("VoterService", () => {
  let voterService: VotersService;
  let mockHttp: { delete: jasmine.Spy; post: jasmine.Spy };

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj("mockHttp", ["delete", "post"]);
    voterService = new VotersService(<any>mockHttp);
  });

  describe("Delete voter", () => {
    it("Should remove the voter from the list of voters", () => {
      var session = {
        id: 6,
        voters: ["joe", "john"]
      };
      mockHttp.delete.and.returnValue(of(false));
      voterService.deleteVoter(3, <ISession>session, "joe");
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe("john");
    });

    it("should call http.delete with the right URL", () => {
      var session = {
        id: 6,
        voters: ["joe", "john"]
      };
      mockHttp.delete.and.returnValue(of(false));
      const url = "/api/events/3/sessions/6/voters/joe";
      voterService.deleteVoter(3, <ISession>session, "joe");
      expect(mockHttp.delete).toHaveBeenCalledWith(url);
    });
  });
  describe("Add voter", () => {
    it("should call http.post with the right URL", () => {
      var session = {
        id: 6,
        voters: ["john"]
      };
      mockHttp.post.and.returnValue(of(false));
      const url = "/api/events/3/sessions/6/voters/joe";
      voterService.addVoter(3, <ISession>session, "joe");
      expect(mockHttp.post).toHaveBeenCalledWith(url, {}, jasmine.any(Object));
    });
  });
});
