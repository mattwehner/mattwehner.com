using System.Collections.Generic;
using Web.Services.DataContracts;

namespace Web.Storage
{
    public class TestData
    {
        internal static readonly Character Grin = new Character
        {
            Id = "C5476D07",
            Name = "Grin",
            Image = "http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg",
        };

        internal static readonly Character JackLumber = new Character
        {
            Id = "9F508E6D",
            Name = "Jack Lumber",
            Image = "http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg",
        };

        internal static readonly Campaign SaintsLight = new Campaign
        {
            Id = "9F508E6D",
            Name = "Saints Light",
            Image = "https://vuni.net/artofgregmartin/800x600/phoenix_nebula.jpg"
        };

        internal static readonly Character SirMancer = new Character
        {
            Id = "F2C665D4",
            Name = "Sir Mancer",
            Image = "http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg",
        };

        internal static readonly Character TianAalor = new Character
        {
            Id = "E7F61483",
            Name = "Tian A'Alor",
            Image = "http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg",
        };

        internal static readonly Campaign ApproachingDarkness =
            new Campaign
            {
                Id = "030E7D50",
                Name = "Approaching Darkness",
                Image = "http://orig05.deviantart.net/a8e9/f/2015/071/b/b/forrest_concept_picture_003_by_kevsanlevsan-d8lftun.jpg",
                Characters = new List<Character>
                {
                    TianAalor,
                    JackLumber,
                    Grin,
                    SirMancer,
                }
            };
    }
}
