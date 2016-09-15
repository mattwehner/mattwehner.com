using System.Collections.Generic;
using ServiceStack;
using Web.Services.DataContracts;
using Web.Services.MessageContracts;

namespace Web.Services
{
    public class Tracks : Service
    {
        public CreateTrackResponse Post(CreateTrack request)
        {
            //TODO save to the data store

            return new CreateTrackResponse
            {
                Track = new Track
                {
                    Url = request.Url
                }
            };
        }

        public SearchTrackResponse Get(SearchTrack request)
        {
            //TODO fetch from data store

            return new SearchTrackResponse
            {
                Tracks = new List<Track>
                {
                    new Track
                    {
                        Url = "youtube"
                    }
                }
            };
        }
    }
}