"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};

if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "SpotImages";

    await queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          url: 'https://d.newsweek.com/en/full/1423046/blue-origins-jeff-bezos-earth-oneill-cylinder-colonies-utopia.jpg?w=1600&h=900&q=88&f=ec0345e8a914eb4e6152b674a45a4a73',
          preview: true,
        },
        {
          spotId: 1,
          url: 'https://www.publicbooks.org/wp-content/uploads/2019/07/03-NASA-768x608.jpg',
          preview: false,
        },
        {
          spotId: 1,
          url: 'https://www.gizmodo.com.au/wp-content/uploads/sites/2/2014/04/19/op1uhgzm5gl17vulo7xl.jpg',
          preview: false,
        },
        {
          spotId: 1,
          url:"https://images.theconversation.com/files/149853/original/image-20161213-1596-wf9uvd.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=333&fit=crop&dpr=1",

          preview: false,
        },
        {
          spotId: 1,
          url:"https://www.columbusmonthly.com/gcdn/-mm-/5761a5644dbbbc0d07f1118b0a22ef5d2dbaa88b/c=0-54-1024-630/local/-/media/2020/12/18/ColumbusMonthly/ghows-OH-200729863-97a7e1ba.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",

          preview: false,
        },
        
        {
          spotId: 2,
          url:'https://images.squarespace-cdn.com/content/v1/581b9de346c3c4dd52bd4ddf/1574979344589-YHJX7DGGQT9AYCP67PMD/Screen+Shot+2019-03-08+at+5.16.06+PM.png' ,
          preview: true,
        },
        {
          spotId: 2,
          url:'https://i.dailymail.co.uk/1s/2018/11/07/10/5876932-0-image-a-11_1541584802639.jpg' ,
          preview: false,
        },
        {
          spotId: 2,
          url:'https://i.dailymail.co.uk/1s/2018/11/07/10/5876936-0-image-a-12_1541584810646.jpg' ,
          preview: false,
        },
        {
          spotId: 2,
          url:'https://na.rdcpix.com/1220165245/8ecb8b5c10a19ccbe1daba7bc38ec77cw-c308216rd-w832_h468_r4_q80.jpg' ,
          preview: false,
        },
        {
          spotId: 2,
          url:'https://us.123rf.com/450wm/justinasv775/justinasv7752304/justinasv775230400443/202330559-digital-illustration-featuring-first-colony-on-mars-red-planet-martian-landscape-with-red-sand-and.jpg?ver=6' ,
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://www.sciencesource.com/pix/226/2268708-life-on-jupiter-illustration.jpg',
          preview: true,
        },
        {
          spotId: 3,
          url: 'https://www.sciencefictionideas.com/wp-content/uploads/2022/12/underwatercity-600x354.jpg',
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/69413701-fe3b-4ee0-b2d5-6a54cd3d0966/dflsw7m-ccd47810-b270-4202-86b3-27fea1e594c7.png/v1/fill/w_1095,h_730,q_70,strp/mayan_stargate__in_a_tropical_jungle3_by_riverfox1_dflsw7m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzY5NDEzNzAxLWZlM2ItNGVlMC1iMmQ1LTZhNTRjZDNkMDk2NlwvZGZsc3c3bS1jY2Q0NzgxMC1iMjcwLTQyMDItODZiMy0yN2ZlYTFlNTk0YzcucG5nIiwid2lkdGgiOiI8PTE1MzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GZbTlAO8AeAgkWmeLHjK51qaRMnRxjRICS3Z4Gzc2Ao',
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/126af714-1290-4b7d-9465-11e6beb06b92/da116cv-630b65ce-e7bb-46ad-a05a-cfcb06c97eaa.jpg/v1/fill/w_1371,h_583,q_70,strp/the_birth_of_the_third_by_arthurblue_da116cv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE3IiwicGF0aCI6IlwvZlwvMTI2YWY3MTQtMTI5MC00YjdkLTk0NjUtMTFlNmJlYjA2YjkyXC9kYTExNmN2LTYzMGI2NWNlLWU3YmItNDZhZC1hMDVhLWNmY2IwNmM5N2VhYS5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aIcBRtdMnnpxnaJv0C-Kjy-ulxgPcgD1wT-IfGqqPZI',
          preview: false,
        },
        {
          spotId: 3,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/126af714-1290-4b7d-9465-11e6beb06b92/d2sa0a5-f31cb9c5-ec10-4e06-8a0d-10659f534887.jpg/v1/fill/w_900,h_683,q_75,strp/the_colony_by_arthurblue_d2sa0a5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgzIiwicGF0aCI6IlwvZlwvMTI2YWY3MTQtMTI5MC00YjdkLTk0NjUtMTFlNmJlYjA2YjkyXC9kMnNhMGE1LWYzMWNiOWM1LWVjMTAtNGUwNi04YTBkLTEwNjU5ZjUzNDg4Ny5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fRpJW3_PkzC5D77_BFvBNxqILsZd4cnXv06aAZLHRis',
          preview: false,
        },
       
        {
          spotId: 4,
          url: 'https://destiny.wiki.gallery/images/thumb/f/fa/Utopia.PNG/1200px-Utopia.PNG',
          preview: true,
        },
        {
          spotId: 4,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c1d0b6bc-ae1d-4726-b675-584df71031cb/dfcyzgd-4a9fd5ec-0d44-47c6-b55d-658f2a685952.png/v1/fill/w_894,h_894,q_70,strp/floating_city__5__by_youvebeen0wned_dfcyzgd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2MxZDBiNmJjLWFlMWQtNDcyNi1iNjc1LTU4NGRmNzEwMzFjYlwvZGZjeXpnZC00YTlmZDVlYy0wZDQ0LTQ3YzYtYjU1ZC02NThmMmE2ODU5NTIucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.E-ryyIV5kDWLS1D63i2F_9aBsLt-lUH-x5i07eL6d1U',
          preview: false,
        },
        {
          spotId: 4,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4d3f848-c016-40c9-aaa6-e47e633a1d19/d6x10w2-ab9556b0-55ce-4228-9472-c120ed97a266.jpg/v1/fill/w_1267,h_630,q_70,strp/ecological_city_by_tryingtofly_d6x10w2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM3IiwicGF0aCI6IlwvZlwvYzRkM2Y4NDgtYzAxNi00MGM5LWFhYTYtZTQ3ZTYzM2ExZDE5XC9kNngxMHcyLWFiOTU1NmIwLTU1Y2UtNDIyOC05NDcyLWMxMjBlZDk3YTI2Ni5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cXDiLdAnC98I8ttjB4Up8gtFwF-7sprfHySVlRhzCUk',
          preview: false,
        },
        {
          spotId: 4,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bfa7d6c-3711-4d59-aab6-07f07558689c/d9413cr-d3e5c9b6-61c7-4da2-92cd-cedd5e909291.jpg/v1/fill/w_1240,h_644,q_70,strp/aenigma___jonada_has_you_by_w_e_z_d9413cr-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMyIiwicGF0aCI6IlwvZlwvNWJmYTdkNmMtMzcxMS00ZDU5LWFhYjYtMDdmMDc1NTg2ODljXC9kOTQxM2NyLWQzZTVjOWI2LTYxYzctNGRhMi05MmNkLWNlZGQ1ZTkwOTI5MS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Kj2cuceCs0OhMN5UuIZrBE712GgHpcvWZDIGkvog7lU',
          preview: false,
        },
        {
          spotId: 4,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/158d538a-09f9-410d-96be-d70dcfd7ef56/dfaluql-03674f0c-7d54-4efe-90ba-4bbd4ba92cb9.png/v1/fill/w_1000,h_800,q_70,strp/futuristic_city_concept_art_by_midjourney_by_avataart_dfaluql-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzE1OGQ1MzhhLTA5ZjktNDEwZC05NmJlLWQ3MGRjZmQ3ZWY1NlwvZGZhbHVxbC0wMzY3NGYwYy03ZDU0LTRlZmUtOTBiYS00YmJkNGJhOTJjYjkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ioJT9b5YpeTHcZ84F21opeEOymOsgfV1dr-kq4tde7k',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://storage.prompt-hunt.workers.dev/cleqq0njf000ejx089h9lqrci_1',
          preview: true,
        },
        {
          spotId: 5,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/433c78d9-d308-4b38-9ced-ec10f3c3bc88/dfahl7s-3e25012a-7a4e-4bb4-8f00-48b368af1b20.png/v1/fill/w_1154,h_692,q_70,strp/rivendell_bridge___made_with_ai__by_kroniksan_dfahl7s-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzM2M3OGQ5LWQzMDgtNGIzOC05Y2VkLWVjMTBmM2MzYmM4OFwvZGZhaGw3cy0zZTI1MDEyYS03YTRlLTRiYjQtOGYwMC00OGIzNjhhZjFiMjAucG5nIiwiaGVpZ2h0IjoiPD03NjgiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80MzNjNzhkOS1kMzA4LTRiMzgtOWNlZC1lYzEwZjNjM2JjODhcL2tyb25pa3Nhbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.aZBPcMh99iwfyJy7ysf-Kujkjx5lrElTKNRZoH4Flbk',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b99dbdcd-648a-4db0-8735-9a59af822810/dfdnm2p-79f297ea-bd0f-4d2c-b736-a2e2c7e414e3.png/v1/fill/w_768,h_512,q_80,strp/vibes_by_hxdxis_dfdnm2p-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvYjk5ZGJkY2QtNjQ4YS00ZGIwLTg3MzUtOWE1OWFmODIyODEwXC9kZmRubTJwLTc5ZjI5N2VhLWJkMGYtNGQyYy1iNzM2LWEyZTJjN2U0MTRlMy5wbmciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3LwfTthslsU9OJPNr536K-oPKXKCRfYCorMd27gJAVw',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b99dbdcd-648a-4db0-8735-9a59af822810/dfhzq3y-10e02205-86e8-45ef-a18c-485c6f324a9e.png/v1/fill/w_894,h_894,q_70,strp/home_by_hxdxis_dfhzq3y-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2I5OWRiZGNkLTY0OGEtNGRiMC04NzM1LTlhNTlhZjgyMjgxMFwvZGZoenEzeS0xMGUwMjIwNS04NmU4LTQ1ZWYtYTE4Yy00ODVjNmYzMjRhOWUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jj_CLZ_LMhczGYgqFricil9SdularuOtttT9VTM8x3M',
          preview: false,
        },
        {
          spotId: 5,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b4dc965-8f20-41ac-a3aa-5405cadaecb4/dfxzm1g-fb8f371f-8c89-479e-a67d-5c7f9bd98071.png/v1/fill/w_1095,h_730,q_70,strp/by_the_riverside_6_by_cdrgirls_dfxzm1g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0OCIsInBhdGgiOiJcL2ZcLzdiNGRjOTY1LThmMjAtNDFhYy1hM2FhLTU0MDVjYWRhZWNiNFwvZGZ4em0xZy1mYjhmMzcxZi04Yzg5LTQ3OWUtYTY3ZC01YzdmOWJkOTgwNzEucG5nIiwid2lkdGgiOiI8PTMwNzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VV44S4WB0ZteI7bExYkuZf8Omo9nw7Rsa9LOdeV4-0w',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3674cefc-f68e-422a-ac13-004d781a18af/d9x6grp-c7dc8ce6-e7fd-44b0-bd88-d8a5abeb94cf.jpg/v1/fill/w_1024,h_577,q_75,strp/digital_spirit_by_julian_faylona_d9x6grp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2NzRjZWZjLWY2OGUtNDIyYS1hYzEzLTAwNGQ3ODFhMThhZlwvZDl4NmdycC1jN2RjOGNlNi1lN2ZkLTQ0YjAtYmQ4OC1kOGE1YWJlYjk0Y2YuanBnIiwiaGVpZ2h0IjoiPD01NzciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zNjc0Y2VmYy1mNjhlLTQyMmEtYWMxMy0wMDRkNzgxYTE4YWZcL2p1bGlhbi1mYXlsb25hLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.bOGx9jtJS7diWE0iEGWZWrV5o6eM5HJj5RnzLPbiK14',
          preview: true,
        },
        {
          spotId: 6,
          url: 'https://sunrisepeak.com/wp-content/uploads/neptune_utopia17.jpg',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97c7c188-72d5-4a35-8f6d-fae02afe21f3/d86x9hm-de0ba988-3ebe-4ccd-8a6a-6afa38bdfe86.jpg/v1/fill/w_1371,h_583,q_70,strp/symbiont_world___carrier_class_ship__genesis_nova__by_przemek_duda_d86x9hm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvOTdjN2MxODgtNzJkNS00YTM1LThmNmQtZmFlMDJhZmUyMWYzXC9kODZ4OWhtLWRlMGJhOTg4LTNlYmUtNGNjZC04YTZhLTZhZmEzOGJkZmU4Ni5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UnN9g8K-E7l5ZbnfM_o-8YlSKueWPYICCsTqCUYwuqw',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c73b3acd-47e0-4663-b1b7-2b8c2c1e1c5a/d1fhjo6-2fa6dd78-9931-4d7f-9244-fa419ad153e0.jpg/v1/fill/w_1024,h_769,q_75,strp/somewhere_in_the_systems_by_christianbeyer_d1fhjo6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY5IiwicGF0aCI6IlwvZlwvYzczYjNhY2QtNDdlMC00NjYzLWIxYjctMmI4YzJjMWUxYzVhXC9kMWZoam82LTJmYTZkZDc4LTk5MzEtNGQ3Zi05MjQ0LWZhNDE5YWQxNTNlMC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hQedZVoYJpH93prtkJj7rXfh2ss6IotdeN6XN4AGpZ4',
          preview: false,
        },
        {
          spotId: 6,
          url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/525f5208-ca87-431d-8017-0b76bf47dc69/df6j500-ce923b59-efa3-40c0-aa14-6cc48b0db928.png/v1/fill/w_1063,h_752,q_70,strp/blockchain_mothership_by_fracbit_df6j500-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI0MCIsInBhdGgiOiJcL2ZcLzUyNWY1MjA4LWNhODctNDMxZC04MDE3LTBiNzZiZjQ3ZGM2OVwvZGY2ajUwMC1jZTkyM2I1OS1lZmEzLTQwYzAtYWExNC02Y2M0OGIwZGI5MjgucG5nIiwid2lkdGgiOiI8PTE3NTQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ybwMiKh-5hbPME7-3aSS06673MZQdfhW90R6JnvVLBc',
          preview: false,
        },
      {   
        spotId: 7,
        url: 'https://www.archiobjects.org/wp-content/uploads/2015/10/ESA-Foster-Partners.jpg',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ddf8348d-fbe5-4325-bf19-573498099c1c/deqmf75-7aa6b090-ba08-4d88-9086-e71aee3f2b1d.jpg/v1/fill/w_1192,h_670,q_70,strp/laser_satellite_approach_by_magnum117_deqmf75-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZGRmODM0OGQtZmJlNS00MzI1LWJmMTktNTczNDk4MDk5YzFjXC9kZXFtZjc1LTdhYTZiMDkwLWJhMDgtNGQ4OC05MDg2LWU3MWFlZTNmMmIxZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2PYVJDz1of5RlpegoK8_ukOr7VKTnhT81CauU3nYsSM',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ddf8348d-fbe5-4325-bf19-573498099c1c/de4ruvb-9f6422b8-4c78-45a3-a49d-8fad5d17413c.jpg/v1/fill/w_1264,h_632,q_70,strp/spire_base___giant_future_arcology__01_by_magnum117_de4ruvb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvZGRmODM0OGQtZmJlNS00MzI1LWJmMTktNTczNDk4MDk5YzFjXC9kZTRydXZiLTlmNjQyMmI4LTRjNzgtNDVhMy1hNDlkLThmYWQ1ZDE3NDEzYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PJ1X3rBMIJs1fchlN41QL8nCL5doN9Fa8rCBxHZBe98',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3674cefc-f68e-422a-ac13-004d781a18af/d96m2lm-3d55cb1c-8b8d-452a-a4a1-b2fb0d96af7d.jpg/v1/fill/w_1024,h_684,q_75,strp/rendezvous_by_julian_faylona_d96m2lm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2NzRjZWZjLWY2OGUtNDIyYS1hYzEzLTAwNGQ3ODFhMThhZlwvZDk2bTJsbS0zZDU1Y2IxYy04YjhkLTQ1MmEtYTRhMS1iMmZiMGQ5NmFmN2QuanBnIiwiaGVpZ2h0IjoiPD02ODQiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8zNjc0Y2VmYy1mNjhlLTQyMmEtYWMxMy0wMDRkNzgxYTE4YWZcL2p1bGlhbi1mYXlsb25hLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.srNG6eWAj9JK3tAo0WEem2VCCxfDqOEztxeH6m1wVZA',
        preview: false,
      },{
        spotId: 7,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f63ff109-f52f-4922-8e6d-000bc591719e/d9980lk-bb73becf-5f76-4696-8c50-ae3999689f09.jpg/v1/fill/w_1024,h_769,q_75,strp/moon_life_by_youssefzidan2200_d9980lk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY5IiwicGF0aCI6IlwvZlwvZjYzZmYxMDktZjUyZi00OTIyLThlNmQtMDAwYmM1OTE3MTllXC9kOTk4MGxrLWJiNzNiZWNmLTVmNzYtNDY5Ni04YzUwLWFlMzk5OTY4OWYwOS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cIpWEhZsfpXicgiLojFthsRADOdZyyYKDOKxe9OlAqo',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://i.pinimg.com/736x/aa/70/49/aa70499124369bb6d3a32db6b145bc0e.jpg',
        preview: true,
      },
      {
        spotId: 8,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/126af714-1290-4b7d-9465-11e6beb06b92/dbxlzdd-9bb508f5-8b14-40bb-bdda-34e11640c560.jpg/v1/fill/w_1192,h_670,q_70,strp/the_craters_of_lyra_9_by_arthurblue_dbxlzdd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzEyNmFmNzE0LTEyOTAtNGI3ZC05NDY1LTExZTZiZWIwNmI5MlwvZGJ4bHpkZC05YmI1MDhmNS04YjE0LTQwYmItYmRkYS0zNGUxMTY0MGM1NjAuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.2cFckre2fy1MdEXanFRjqZy82bsY6QpvWLZIw0Gvi44',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c2b4cc2-d07d-4fbd-b02e-2080981b29a1/dem9my7-31f38b32-5649-4a17-8d0f-143de2ff4487.jpg/v1/fill/w_1192,h_670,q_70,strp/utopia_by_t1na_dem9my7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMGMyYjRjYzItZDA3ZC00ZmJkLWIwMmUtMjA4MDk4MWIyOWExXC9kZW05bXk3LTMxZjM4YjMyLTU2NDktNGExNy04ZDBmLTE0M2RlMmZmNDQ4Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.f1U5ONmNDJ36s_cDF6OEKvrIe2_n73TaAcahgRpPyQ0',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b02d897d-c9fd-4152-be85-386b7ec29968/ddq5anf-5f728ed0-47a9-4a3b-bc53-37f58e769602.jpg/v1/fill/w_894,h_894,q_70,strp/shapes_of_glass_by_talsa_aka_ritsyka_ddq5anf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcL2IwMmQ4OTdkLWM5ZmQtNDE1Mi1iZTg1LTM4NmI3ZWMyOTk2OFwvZGRxNWFuZi01ZjcyOGVkMC00N2E5LTRhM2ItYmM1My0zN2Y1OGU3Njk2MDIuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.QQ2hXXVipLyeENN4KhtLLkmIIo8Pnh9zguNDomgJhUs',
        preview: false,
      },
      {
        spotId: 8,
        url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7fd26ad-c728-4d53-8b1f-b2a2e23c2691/d8utdjp-7840d9f7-4a9d-4380-806c-a5553a548ff7.jpg/v1/fill/w_495,h_350,q_70,strp/torre_di_pisa_leaning_tower_of_pisa_by_tokyogenso_d8utdjp-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk2IiwicGF0aCI6IlwvZlwvYzdmZDI2YWQtYzcyOC00ZDUzLThiMWYtYjJhMmUyM2MyNjkxXC9kOHV0ZGpwLTc4NDBkOWY3LTRhOWQtNDM4MC04MDZjLWE1NTUzYTU0OGZmNy5qcGciLCJ3aWR0aCI6Ijw9OTg0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DYOSkcqTwe9lbQc4CRpSUylMo9s2OGXZeNd1ToA9ysg',
        preview: false,
      },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        spotId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};
