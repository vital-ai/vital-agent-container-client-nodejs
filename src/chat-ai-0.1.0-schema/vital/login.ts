import { CredentialsLogin } from './credentialsLogin';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Login
 */
export class Login extends CredentialsLogin {
  public loginStatusURI?: string;
  public loginCreatedDateTime?: string | Date;
  public singleSignOnIdentifier?: string;
  public accountInternalAdmin?: boolean;
  public serviceLogin?: boolean;
  public loginOnboardingStatusURI?: string;
  public haleyTestCase?: boolean;
  public testData?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Login';
  }

  /**
   * Get property definitions for Login
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginStatusURI',
        tsPropertyName: 'loginStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasLoginCreatedDateTime',
        tsPropertyName: 'loginCreatedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSingleSignOnIdentifier',
        tsPropertyName: 'singleSignOnIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAccountInternalAdmin',
        tsPropertyName: 'accountInternalAdmin',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isServiceLogin',
        tsPropertyName: 'serviceLogin',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLoginOnboardingStatusURI',
        tsPropertyName: 'loginOnboardingStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isHaleyTestCase',
        tsPropertyName: 'haleyTestCase',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isTestData',
        tsPropertyName: 'testData',
        type: 'boolean',
        required: false
      }
    ];
  }


}
