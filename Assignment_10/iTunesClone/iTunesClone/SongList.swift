//
//  SongList.swift
//  itunes Clone
//
//  Created by Benjamin Berli on 24.04.22.
//

import SwiftUI

struct SongList: View {
    
    @State var songs: [Song] = []
    
    var body: some View {
        
        List(songs) { song in
            VStack(alignment: .leading, spacing: 10) {
                Text("Artist: \(song.artistName)")
                Text("Album: \(song.collectionName)")
            }
        }.onAppear {
            Api().getSongs { (songs) in
                self.songs = songs
            }
        }
    }
}
    

struct SongList_Previews: PreviewProvider {
    static var previews: some View {
        SongList()
    }
}

