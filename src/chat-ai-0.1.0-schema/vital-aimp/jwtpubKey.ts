import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#JWTPubKey
 */
export class JWTPubKey extends VITAL_Node {
  public jwtPubKeyString?: string;
  public jwtKeyIdentifier?: string;
  public jwtProviderIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#JWTPubKey';
  }

  /**
   * Get property definitions for JWTPubKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtPubKeyString',
        tsPropertyName: 'jwtPubKeyString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtKeyIdentifier',
        tsPropertyName: 'jwtKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtProviderIdentifier',
        tsPropertyName: 'jwtProviderIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
