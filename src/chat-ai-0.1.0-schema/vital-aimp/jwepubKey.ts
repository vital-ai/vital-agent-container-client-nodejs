import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#JWEPubKey
 */
export class JWEPubKey extends VITAL_Node {
  public jweProviderIdentifier?: string;
  public jweKeyIdentifier?: string;
  public jwePubKeyString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#JWEPubKey';
  }

  /**
   * Get property definitions for JWEPubKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweProviderIdentifier',
        tsPropertyName: 'jweProviderIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweKeyIdentifier',
        tsPropertyName: 'jweKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwePubKeyString',
        tsPropertyName: 'jwePubKeyString',
        type: 'string',
        required: false
      }
    ];
  }


}
