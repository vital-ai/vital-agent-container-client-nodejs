import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCryptoKey
 */
export class HaleyCryptoKey extends VITAL_Node {
  public keyHash?: string;
  public keySubjectIdentity?: string;
  /** URI reference to one of: Login, HaleyAccount */
  public keySubject?: string;
  public encryptedKey?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCryptoKey';
  }

  /**
   * Get property definitions for HaleyCryptoKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasKeyHash',
        tsPropertyName: 'keyHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasKeySubjectIdentity',
        tsPropertyName: 'keySubjectIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasKeySubject',
        tsPropertyName: 'keySubject',
        type: 'http://vital.ai/ontology/vital#Login | http://vital.ai/ontology/haley#HaleyAccount',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEncryptedKey',
        tsPropertyName: 'encryptedKey',
        type: 'string',
        required: false
      }
    ];
  }


}
