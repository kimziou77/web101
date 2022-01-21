package com.example.web101backend.security;

import com.example.web101backend.persistence.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Service
public class TokenProvider {
    private static final String SECRET_KEY = "NMA8JPctFuna59f5";

    public String create(UserEntity userEntity){
        Date expiryDate = Date.from(
                Instant.now().plus(1, ChronoUnit.DAYS));

        return Jwts.builder()
                //header
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY) //"alg":"HS512
                //payload
                .setSubject(userEntity.getId()) //"sub":"40288093784915d201784916a40c0001",
                .setIssuer("demo app")          //"iss":"demo app",
                .setIssuedAt(new Date())        //"iat":1595733657,
                .setExpiration(expiryDate)      //"exp":1596597657

                .compact();                     //Nn4d1MOVLZg79sfFACTIpCPK....
    }
    public String validateAndGetUserId(String token){
        Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }
}
