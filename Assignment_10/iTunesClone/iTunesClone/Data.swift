//
//  Data.swift
//  iTunesClone
//
//  Created by Benjamin Berli on 26.04.22.
//
import SwiftUI

struct Result: Decodable {
    var resultCount: Int
    var results: [Song]
}

struct Song: Decodable, Identifiable {
    var artistName: String
    var collectionName: String
    var artworkUrl100: String
    var id: String {
        get {
            return artistName
        }
    }
}

class Api {
    func getSongs(searchQuery: String, completion: @escaping ([Song]) -> ()) {
        
        var checkedSearchQuery = searchQuery
        
        if let range = checkedSearchQuery.range(of: " ") {
            let replacedString = checkedSearchQuery.replacingCharacters(in: range,with: "+")
            checkedSearchQuery = replacedString
        }
        
        guard let url = URL(string: "https://itunes.apple.com/search?term=\(checkedSearchQuery)&entity=album") else { return }
        
        URLSession.shared.dataTask(with: url) { data, _, _ in
            let songs = try! JSONDecoder().decode(Result.self, from: data!)
            let songList = songs.results
            
            DispatchQueue.main.async {
                completion(songList)
            }
        }.resume()
    }
    
}
