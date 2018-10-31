package ru.gworkshop.slhub.common.service;

import org.hibernate.ObjectNotFoundException;
import org.hibernate.PersistentObjectException;
import org.junit.Assert;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import ru.gworkshop.slhub.common.model.entity.User;
import ru.gworkshop.slhub.common.model.repository.UserRepository;
import ru.gworkshop.slhub.common.model.responce.REST.UniversalResponse;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.IntStream;

@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@DataJpaTest
@TestPropertySource("classpath:test.properties")
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class UserHandlerTest
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Environment environment;

    @Autowired
    private EntityManager entityManager;

    private UserHandler userHandler;

    private static int currentId = -2;

    public long getExistingPointer()
    {

        return (long) ThreadLocalRandom.current()
                                       .nextInt( currentId, currentId + 3 );
    }

    public long getNewPointer()
    {
        return currentId + 3;
    }

    public User getValidUser( long i )
    {

        return User.builder()
                   .id( i )
                   .email( "test" + i + "@email.com" )
                   .googleId( String.valueOf( i ) )
                   .isAdmin( i % 3 == 0 )
                   .build();
    }

    @Before
    public void prepareMockData()
    {
        userHandler = new UserHandler( userRepository, environment );
        if(userRepository.count() == 0) {

            currentId += 3;

            ArrayList<User> users = new ArrayList<>();

            IntStream.range( currentId, currentId + 3 )
                     .mapToObj( this::getValidUser )
                     .forEach( users::add );

            for ( User user : users ) {
                userRepository.save( user );
            }
        }
    }

    @Test
    public void getById()
    {
        Long i = getExistingPointer();
        User expected = getValidUser( i );

        User found = userHandler.get( i );
        Assert.assertEquals( expected, found );
    }

    @Test
    public void getByToken()
    {
        Long i = getExistingPointer();
        User expected = getValidUser( i );

        User found = userHandler.get( String.valueOf( i ) );
        Assert.assertEquals( expected, found );
    }

    @Test(expected = IllegalArgumentException.class)
    public void invalidGetByToken()
    {
        userHandler.get( "" );
    }

    @Test(expected = ObjectNotFoundException.class)
    public void failGetByToken()
    {
        userHandler.get( String.valueOf( getNewPointer() ) );
    }

    @Test(expected = ObjectNotFoundException.class)
    public void failGetById()
    {
        userHandler.get( getNewPointer() );
    }

    @Test
    public void getByEmail()
    {
        Long i = getExistingPointer();
        User expected = getValidUser( i );

        User found = userHandler.getByEmail( "test" + i + "@email.com" );
        Assert.assertEquals( expected, found );
    }

    @Test(expected = ObjectNotFoundException.class)
    public void failGetByEmail()
    {
        userHandler.getByEmail( "test10@email.com" );
    }

    @Test(expected = ObjectNotFoundException.class)
    public void failByEmail()
    {
        userHandler.getByEmail( "test10@email.com" );
    }

    @Test
    public void isRegisteredById()
    {
        Long i = getExistingPointer();

        boolean result = userHandler.isRegistered( i );
        Assert.assertTrue( result );
    }

    @Test
    public void isNotRegisteredById()
    {
        Assert.assertFalse( userHandler.isRegistered( getNewPointer() ) );
    }

    @Test
    public void isRegisteredByToken()
    {
        Long i = getExistingPointer();

        boolean result = userHandler.isRegistered( String.valueOf( i ) );
        Assert.assertTrue( result );
    }

    @Test(expected = IllegalArgumentException.class)
    public void invalidIsRegisteredByToken()
    {
        userHandler.isRegistered( "" );
    }

    @Test
    public void isNotRegisteredByToken()
    {
        Assert.assertFalse( userHandler.isRegistered( String.valueOf( getNewPointer() ) ) );
    }

    @Test
    public void register()
    {
        Long i = getNewPointer();
        User expected = getValidUser( i );

        userHandler.register( String.valueOf( i ), false );

        Optional<User> found = userRepository.findById( i );
        Assert.assertEquals( expected, found.get() );
    }

    @Test(expected = PersistentObjectException.class)
    public void existingRegister()
    {
        userHandler.register( String.valueOf( getExistingPointer() ), false );
    }

    @Test
    public void checkAuthOK()
    {
        Long i = getExistingPointer();

        UniversalResponse<User> expected = new UniversalResponse<>( 25 );
        UniversalResponse<User> found = userHandler.checkAuth( String.valueOf( i ) );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void checkAuthNotRegistered()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 44 );
        UniversalResponse<User> found = userHandler.checkAuth( String.valueOf( getNewPointer() ) );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void checkAuthInvalidToken()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 45 );
        UniversalResponse<User> found = userHandler.checkAuth( "" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void loginOK()
    {
        Long i = getExistingPointer();

        User expectedUser = getValidUser( i );

        UniversalResponse<User> expected = new UniversalResponse<>( 25, null, expectedUser );
        UniversalResponse<User> found = userHandler.login( String.valueOf( i ) );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void loginNewUser()
    {
        Long i = getNewPointer();

        User expectedUser = getValidUser( i );

        UniversalResponse<User> expected = new UniversalResponse<>( 21, null, expectedUser );
        UniversalResponse<User> found = userHandler.login( String.valueOf( i ) );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void loginInvalidToken()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 45 );
        UniversalResponse<User> found = userHandler.login( "" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByEmail()
    {
        Long i = getExistingPointer();

        User expectedUser = getValidUser( i );

        UniversalResponse<User> expected = new UniversalResponse<>( 31, null, expectedUser );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getExistingPointer() ), "test" + i + "@email.com" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByEmailNotFound()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 34 );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getExistingPointer() ), "fake@email.com" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByEmailNotRegisteredLookingForRealUser()
    {
        Long i = getExistingPointer();

        UniversalResponse<User> expected = new UniversalResponse<>( 44 );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getNewPointer() ), "test" + i + "@email.com" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByEmailNotRegisteredLookingForFakelUser()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 44 );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getNewPointer() ), "fake@email.com" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByEmailInvalidTokenLookingForRealUser()
    {
        Long i = getExistingPointer();

        UniversalResponse<User> expected = new UniversalResponse<>( 45 );
        UniversalResponse<User> found = userHandler.findUser( "", "test" + i + "@email.com" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByEmailInvalidTokenLookingForFakeUser()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 45 );
        UniversalResponse<User> found = userHandler.findUser( "", "fake@email.com" );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserById()
    {
        Long i = getExistingPointer();
        User expectedUser = getValidUser( i );

        UniversalResponse<User> expected = new UniversalResponse<>( 31, null, expectedUser );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getExistingPointer() ), i );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByIdNotFound()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 34 );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getExistingPointer() ), getNewPointer() );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByIdNotRegisteredLookingForRealUser()
    {
        Long i = getExistingPointer();

        UniversalResponse<User> expected = new UniversalResponse<>( 44 );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getNewPointer() ), i );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByIdNotRegisteredLookingForFakeUser()
    {
        Long i = getExistingPointer();

        UniversalResponse<User> expected = new UniversalResponse<>( 44 );
        UniversalResponse<User> found = userHandler.findUser( String.valueOf( getNewPointer() ), getNewPointer() );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByIdInvalidTokenLookingForRealUser()
    {
        Long i = getExistingPointer();

        UniversalResponse<User> expected = new UniversalResponse<>( 45 );
        UniversalResponse<User> found = userHandler.findUser( "", i );

        Assert.assertEquals( expected, found );
    }

    @Test
    public void findUserByIdInvalidTokenLookingForFakeUser()
    {
        UniversalResponse<User> expected = new UniversalResponse<>( 45 );
        UniversalResponse<User> found = userHandler.findUser( "", getNewPointer() );

        Assert.assertEquals( expected, found );
    }
}
