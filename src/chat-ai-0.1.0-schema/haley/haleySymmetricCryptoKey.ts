import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleySymmetricCryptoKey
 */
export class HaleySymmetricCryptoKey extends VITAL_Node {
  public symmetricCryptoKeyIdentifier?: string;
  public symmetricCryptoKeyGenerationDateTime?: string | Date;
  public symmetricCryptoKey?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleySymmetricCryptoKey';
  }

  /**
   * Get property definitions for HaleySymmetricCryptoKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasSymmetricCryptoKeyIdentifier',
        tsPropertyName: 'symmetricCryptoKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasSymmetricCryptoKeyGenerationDateTime',
        tsPropertyName: 'symmetricCryptoKeyGenerationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasSymmetricCryptoKey',
        tsPropertyName: 'symmetricCryptoKey',
        type: 'string',
        required: false
      }
    ];
  }


}
