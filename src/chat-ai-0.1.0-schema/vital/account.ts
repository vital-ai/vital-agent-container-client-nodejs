import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Account
 */
export class Account extends VITAL_Node {
  public locked?: boolean;
  public jwtProviderIdentifier?: string;
  public interAccountSearchableRecipient?: boolean;
  public accountStatusURI?: string;
  public accountID?: string;
  public singleSignOnProviderURI?: string;
  public haleyChatTestTypeURI?: string;
  public haleyTestCase?: boolean;
  public retired?: boolean;
  public localLoginsValidated?: boolean;
  public localLoginsType?: string;
  public accountLoginSuffix?: string;
  public testData?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Account';
  }

  /**
   * Get property definitions for Account
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isLocked',
        tsPropertyName: 'locked',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtProviderIdentifier',
        tsPropertyName: 'jwtProviderIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInterAccountSearchableRecipient',
        tsPropertyName: 'interAccountSearchableRecipient',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAccountStatusURI',
        tsPropertyName: 'accountStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountID',
        tsPropertyName: 'accountID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSingleSignOnProviderURI',
        tsPropertyName: 'singleSignOnProviderURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTestTypeURI',
        tsPropertyName: 'haleyChatTestTypeURI',
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
        propertyURI: 'http://vital.ai/ontology/vital#isRetired',
        tsPropertyName: 'retired',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isLocalLoginsValidated',
        tsPropertyName: 'localLoginsValidated',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLocalLoginsType',
        tsPropertyName: 'localLoginsType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountLoginSuffix',
        tsPropertyName: 'accountLoginSuffix',
        type: 'string',
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
