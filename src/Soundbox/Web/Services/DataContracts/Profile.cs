﻿using System.Collections.Generic;

namespace Web.Services.DataContracts
{
    public class Profile
    {
        public string Id { get; set; }

        public string Username { get; set; }

        public List<string> Campaigns { get; set; }

        public List<string> Characters { get; set; }

        public List<string> Playlists { get; set; }

        public List<string> Soundboards { get; set; }
    }
}