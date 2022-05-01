//
//  SongList.swift
//  itunes Clone
//
//  Created by Benjamin Berli on 24.04.22.
//

import SwiftUI

struct SongList: View {
    
    @State var songs: [Song] = []
    @State var searchQuery: String = ""
    
    var body: some View {
        VStack(spacing: 0) {
            
            VStack(spacing: 0) {
            Text("Fake iTunes").font(.system(size: 25, weight: .bold, design: .default)).padding(.bottom)
            TextField("Search for album", text: $searchQuery)
                .padding(.all)
                .border(Color(UIColor.separator))
                .padding(.leading)
                .padding(.trailing)
                .onSubmit {
                    Api().getSongs(searchQuery: searchQuery, completion: { songs in
                        self.songs = songs
                    })
                }
                
            }.padding(.all)
            
            List(songs) { song in
                HStack(spacing: 40) {
                    AsyncImage(url: URL(string: song.artworkUrl100))
                    VStack(alignment: .leading, spacing: 10) {
                        Text("Artist: \(song.artistName)")
                        Text("Album: \(song.collectionName)")
                    }
                }
            }
        }
    }
}
    

struct SongList_Previews: PreviewProvider {
    static var previews: some View {
        SongList()
    }
}

