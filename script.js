var favTeam = { name: 'New York Mets',
                sport: 'baseball',
                city: 'New York City',
                manager: 'Terry Collins',
                league: 'National League',
                division: 'East Division',
                worldSeries: [1969, 1986],
                nlPennants: [1969, 1973, 1986, 2000, 2015],
                divisionYears: [1969, 1973, 1986, 1988, 2006, 2015],
                myChant: "Let's Go Mets",
                printOut: function() {
                  console.log('The ' + this.name + ' are a professional ' + this.sport +
                              ' team in ' + this.city + '. The ' + this.name + ' compete in the ' +
                              this.league + ' ' + this.division + '. ' + this.numTitles +
                              ' The ' + this.name + ' are managed by ' + this.manager + '. '
                              + this.myChant + "!"
                              );

                },
                get numTitles() {
                  var x = [favTeam.worldSeries.length, favTeam.nlPennants.length, favTeam.divisionYears.length];
                   return this.name + ' have won the World Series ' + x[0] + ' times, the NL Pennant ' +
                   x[1] + ' times, and the Division ' + x[2] + ' times, for a total of ' + (x[0] + x[1] +x[2]) + ' titles.'
                  },

               };

favTeam.printOut();
