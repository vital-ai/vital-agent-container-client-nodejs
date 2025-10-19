import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAPIKey
 */
export class HaleyAPIKey extends VITAL_Node {
  public aPIKey?: string;
  public aPIKeySessionKeyIdentifier?: string;
  public aPIKeyIdentifier?: string;
  public encryptedAPIKey?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAPIKey';
  }

  /**
   * Get property definitions for HaleyAPIKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAPIKey',
        tsPropertyName: 'aPIKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAPIKeySessionKeyIdentifier',
        tsPropertyName: 'aPIKeySessionKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAPIKeyIdentifier',
        tsPropertyName: 'aPIKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasEncryptedAPIKey',
        tsPropertyName: 'encryptedAPIKey',
        type: 'string',
        required: false
      }
    ];
  }


}
